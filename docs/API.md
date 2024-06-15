# API Documentation

## POST /api/connect

Connects a user to an astrologer.

### Request

**Headers**:
- Authorization: Bearer <JWT_TOKEN>

**Body**:
```json
{
  "id": "user123",
  "name": "csd"
}
