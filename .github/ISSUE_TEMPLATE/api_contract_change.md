---
name: API Contract Change
about: Propose changes to API endpoints or data models
title: '[API] '
labels: api-contract, backend, frontend
assignees: ''
---

## 🔄 Change Type

- [ ] New endpoint
- [ ] Modify existing endpoint
- [ ] Remove endpoint
- [ ] Add field to existing model
- [ ] Remove field from model
- [ ] Change field type
- [ ] Other (specify)

## 🚨 Breaking Change?

- [ ] Yes - Requires frontend code changes
- [ ] No - Backward compatible

**If breaking:** What's the migration plan?

## 📝 Change Description

Describe the proposed API change in detail.

## 🎯 Motivation

Why is this change needed?

## 📋 Current API

**Endpoint:** `[METHOD] /api/endpoint`

**Request:**

```json
{
  "current": "request schema"
}
```

**Response:**

```json
{
  "current": "response schema"
}
```

## 🆕 Proposed API

**Endpoint:** `[METHOD] /api/endpoint`

**Request:**

```json
{
  "proposed": "request schema"
}
```

**Response:**

```json
{
  "proposed": "response schema"
}
```

## 📊 Schema Changes

**Modified Files:**

- [ ] `docs/api/openapi.yaml`
- [ ] `docs/api/schemas/[schema-name].json`
- [ ] Frontend types/interfaces
- [ ] Backend models

## 🔍 Impact Analysis

**Frontend Changes Required:**

- [ ] API call modifications
- [ ] UI updates
- [ ] State management updates
- [ ] Type definitions
- [ ] Testing updates

**Backend Changes Required:**

- [ ] Controller updates
- [ ] Model changes
- [ ] Database migration
- [ ] Validation updates
- [ ] Testing updates

## 🧪 Testing Plan

How will this be tested?

- [ ] Unit tests (backend)
- [ ] Integration tests
- [ ] Frontend integration tests
- [ ] Manual testing checklist

## 📅 Timeline

**Proposed Implementation Date:** [date]
**Deprecation Date (if breaking):** [date]

## 🔄 Backward Compatibility Plan

For breaking changes:

- API versioning strategy (e.g., `/api/v2/endpoint`)
- Deprecation timeline
- Migration guide for frontend
- Communication plan

## 📚 Documentation Updates

- [ ] OpenAPI spec updated
- [ ] API docs/README updated
- [ ] Frontend API integration guide updated
- [ ] Postman collection updated
- [ ] CHANGELOG.md entry added

## 🤝 Team Approval

**Backend Team:**

- [ ] Reviewed by backend lead
- [ ] Implementation feasible

**Frontend Team:**

- [ ] Reviewed by frontend lead
- [ ] Changes acceptable

## ✅ Definition of Done

- [ ] API contract files updated
- [ ] Backend implementation complete
- [ ] Frontend integration complete
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Reviewed and approved by both teams

## 🔗 Related Issues/PRs

- Related to: #
- Depends on: #
- Blocks: #
