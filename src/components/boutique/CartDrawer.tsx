import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { X, Trash2, Plus, Minus, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, addToCart, clearCart, isCartOpen, setIsCartOpen, branches } = useSalon();
  
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'shipping'>('pickup');
  const [selectedBranchPickup, setSelectedBranchPickup] = useState<string>(branches[0].id);
  const [customerName, setCustomerName] = useState<string>('Caroline Pinckney');
  const [customerAddress, setCustomerAddress] = useState<string>('North Carolina');
  const [paymentMethod, setPaymentMethod] = useState<'apple_pay' | 'card' | 'google_pay'>('apple_pay');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.product.priceUSD * item.quantity), 0);
  const shippingFee = deliveryType === 'shipping' ? 15 : 0;
  const estimatedTax = Math.round(subtotal * 0.0725 * 100) / 100; // NC state + local county tax ~7.25%
  const grandTotal = Math.round((subtotal + shippingFee + estimatedTax) * 100) / 100;

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsSubmitting(true);

    const payload = {
      items: cart.map(item => ({
        productId: item.product.id,
        name: item.product.name,
        priceUSD: item.product.priceUSD,
        quantity: item.quantity
      })),
      totalAmountUSD: grandTotal,
      deliveryType,
      branchId: deliveryType === 'pickup' ? selectedBranchPickup : undefined,
      deliveryAddress: deliveryType === 'shipping' ? customerAddress : undefined,
      customerName,
      paymentMethod
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setConfirmedOrder(data.order);
        clearCart();
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#C6A667', '#F3DFE3', '#FAF8F5']
        });
      }
    } catch {
      const fallbackOrder = {
        id: `ord-${Date.now()}`,
        referenceCode: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        items: payload.items,
        totalAmountUSD: grandTotal,
        paymentMethod
      };
      setConfirmedOrder(fallbackOrder);
      clearCart();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-[#C6A667]/40">
        
        {/* Header */}
        <div className="bg-[#3B2A28] text-white p-5 flex items-center justify-between border-b border-[#C6A667]/30">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              The Glamway Boutiques · North Carolina
            </div>
            <div className="font-serif text-lg font-medium">Your Shopping Bag</div>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setConfirmedOrder(null);
            }}
            className="text-white/70 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {confirmedOrder ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-[#C6A667] text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="font-serif text-2xl text-[#302725]">Order Confirmed</h3>
              <p className="text-xs text-[#A48D84]">
                Thank you. Your boutique order #{confirmedOrder.referenceCode} has been authorized.
              </p>
              <div className="bg-white p-4 border border-[#C6A667]/30 text-xs font-mono text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">STATUS:</span>
                  <span className="font-bold text-[#C6A667]">PAID &amp; PREPARING</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">TOTAL:</span>
                  <span>${confirmedOrder.totalAmountUSD.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">PAYMENT:</span>
                  <span className="uppercase">{confirmedOrder.paymentMethod.replace('_', ' ')}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  setIsCartOpen(false);
                }}
                className="w-full py-2.5 bg-[#302725] text-white text-xs uppercase tracking-wider"
              >
                Continue Browsing
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-12 text-[#A48D84] space-y-3">
              <div className="font-serif text-lg text-[#302725]">Your bag is currently empty</div>
              <p className="text-xs">Explore our salon-exclusive hair, skin, and nail formulations.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Item List */}
              <div className="space-y-3">
                {cart.map(item => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-white border border-[#C6A667]/20 rounded-sm flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-xs border border-[#C6A667]/20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-sm font-semibold text-[#302725] truncate">
                        {item.product.name}
                      </div>
                      <div className="text-xs text-[#C6A667] font-semibold tabular-nums">
                        ${item.product.priceUSD}
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              addToCart(item.product, -1);
                            } else {
                              removeFromCart(item.product.id);
                            }
                          }}
                          className="w-5 h-5 bg-[#FAF8F5] border border-[#C6A667]/40 flex items-center justify-center text-xs text-[#302725]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item.product, 1)}
                          className="w-5 h-5 bg-[#FAF8F5] border border-[#C6A667]/40 flex items-center justify-center text-xs text-[#302725]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#A48D84] hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery / Branch Pickup */}
              <div className="space-y-3 pt-3 border-t border-[#302725]/10">
                <div className="text-xs uppercase tracking-wider text-[#A48D84] font-semibold">
                  Fulfillment Method
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setDeliveryType('pickup')}
                    className={`p-2.5 border text-center rounded-sm transition-all ${
                      deliveryType === 'pickup'
                        ? 'border-[#C6A667] bg-white font-semibold text-[#3B2A28]'
                        : 'border-[#C6A667]/20 bg-white/60 text-[#A98F86]'
                    }`}
                  >
                    NC Branch Pickup (Free)
                  </button>
                  <button
                    onClick={() => setDeliveryType('shipping')}
                    className={`p-2.5 border text-center rounded-sm transition-all ${
                      deliveryType === 'shipping'
                        ? 'border-[#C6A667] bg-white font-semibold text-[#3B2A28]'
                        : 'border-[#C6A667]/20 bg-white/60 text-[#A98F86]'
                    }`}
                  >
                    U.S. Priority (+$15)
                  </button>
                </div>

                {deliveryType === 'pickup' ? (
                  <div>
                    <label className="block text-[11px] text-[#A98F86] mb-1">Select Branch for Pickup</label>
                    <select
                      value={selectedBranchPickup}
                      onChange={(e) => setSelectedBranchPickup(e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-[#C6A667]/30 rounded-sm text-[#3B2A28]"
                    >
                      {branches.map(b => (
                        <option key={b.id} value={b.id}>{b.name} ({b.city}, NC)</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] text-[#A98F86] mb-1">U.S. Shipping Address</label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-[#C6A667]/30 rounded-sm text-[#3B2A28]"
                    />
                  </div>
                )}
              </div>

              {/* Payment selector */}
              <div className="space-y-2 pt-3 border-t border-[#3B2A28]/10">
                <div className="text-xs uppercase tracking-wider text-[#A98F86] font-semibold">
                  Payment Method
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    onClick={() => setPaymentMethod('apple_pay')}
                    className={`p-2 border rounded-sm ${paymentMethod === 'apple_pay' ? 'border-black bg-stone-100 font-bold' : 'border-[#C6A667]/30 bg-white'}`}
                  >
                     Pay
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 border rounded-sm ${paymentMethod === 'card' ? 'border-[#3B2A28] bg-stone-100 text-[#3B2A28] font-bold' : 'border-[#C6A667]/30 bg-white'}`}
                  >
                    Credit Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('google_pay')}
                    className={`p-2 border rounded-sm ${paymentMethod === 'google_pay' ? 'border-blue-600 bg-blue-50 text-blue-600 font-bold' : 'border-[#C6A667]/30 bg-white'}`}
                  >
                    G Pay
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Checkout Summary */}
        {!confirmedOrder && cart.length > 0 && (
          <div className="bg-[#FFF9F4] border-t border-[#C6A667]/30 p-6 space-y-3">
            <div className="text-xs space-y-1 text-[#3B2A28]">
              <div className="flex justify-between">
                <span className="text-[#A98F86]">Subtotal:</span>
                <span className="font-semibold tabular-nums">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A98F86]">Estimated NC Tax (7.25%):</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A98F86]">Fulfillment:</span>
                <span>{shippingFee === 0 ? 'Complimentary Branch Pickup' : `$${shippingFee}`}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#3B2A28]/10 font-serif text-lg font-bold">
                <span>Total:</span>
                <span className="text-[#C6A667] tabular-nums">${grandTotal.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full py-3 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 rounded-xs shadow-xs"
            >
              {isSubmitting ? 'Processing Payment...' : 'Authorize Purchase'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
