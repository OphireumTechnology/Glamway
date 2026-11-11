# Glamway secure appointment backend — implementation contract

Status: **design-only foundation; no live booking API deployed**.

## Trust boundary
GitHub Pages serves static frontend files only. The browser must never contain database administrator keys, service-role tokens, or credentials. Deploy the booking API and database separately with managed secrets and HTTPS. The existing contact-first modal remains in place until production readiness is proven.

## Minimum entities
- Branch: id, name, time_zone (America/New_York), active.
- Service: id, duration_minutes, eligible_branch_ids, active.
- Staff: id, branch_id, approved_service_ids, active; no demo staff accounts.
- Availability rule: staff_id, local day/time range, effective dates, exception dates.
- Appointment: opaque id, branch_id, service_id, staff_id, starts_at_utc, ends_at_utc, status (held/confirmed/cancelled/completed), client contact reference, created_at.
- Audit event: actor, action, target, timestamp, request_id; exclude sensitive client data.

## Proposed API (not implemented)
- GET /api/v1/branches and /api/v1/services: public read-only approved catalog.
- GET /api/v1/availability?branch_id=&service_id=&date=: server-derived available slots, America/New_York daylight saving conversion, throttled and cache-safe.
- POST /api/v1/appointments: authenticated or verified client contact, server-side validation, rate limiting, idempotency key, transactional slot conflict prevention, explicit confirmation only after durable write.
- GET /api/v1/appointments/:id: owner or authorized staff only; never enumerate appointments publicly.
- POST /api/v1/appointments/:id/cancel: owner or authorized staff; enforce cancellation policy.
- Staff management: separate authenticated role-checked routes, with audit events.

## Security and data integrity acceptance
1. Validate branch/service/staff eligibility and active status on the server; never trust browser-supplied duration or pricing.
2. Prevent double booking atomically in the database, including concurrent requests and held-slot expiry.
3. Use parameterized queries, restrictive row-level permissions, CSRF protection where cookie sessions apply, strict CORS and security headers.
4. Minimize personally identifiable information; define retention and deletion rules before collecting client records.
5. Do not send confirmation email or SMS until a confirmed database transaction exists; queue notifications with retries.
6. No hard-coded appointments, fake availability, public staff bypass, or demo client records.
7. Test timezone/DST boundaries, concurrency, unauthorized access, cancellation, duplicate requests and network retries.
8. Keep public booking disabled until backend deployment, secret management, migration, end-to-end testing and monitoring pass.

## Deployment gate
Choose and approve a backend/database host, secret management, domain and notification provider. Add a protected staging environment. Only then implement migrations and endpoints, run acceptance tests, and enable the UI behind a feature flag.
