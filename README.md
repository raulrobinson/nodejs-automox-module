# nodejs-automox-module
Backend Nodejs for AutoMOX Control System Automatic

- **Last Register**

Request:

```javascript
curl --location 'https://nodejs-automox-module.vercel.app/api/v1/one' \
--header 'app_id: abcdefgh-ijkl-mnop-qrst-123456789012'
```

Response:

```json
{
    "total": 1,
    "response": {
        "id": 6,
        "PSIGRAM": "1437.5",
        "PSIGLAM": "54.0",
        "PO2FLAM": "19.61",
        "CDPPPAM": "-6.0",
        "PPMCOAM": "0.0",
        "PSIG1OM": "0.0",
        "PSIG2OM": "0.0",
        "PSIG3OM": "75.45",
        "PSIG4OM": "89.47",
        "PO2G1OM": "79.88",
        "PO2G2OM": "89.86",
        "PO2G3OM": "94.45",
        "PO2G4OM": "95.52",
        "PSIGFLO": "59.17",
        "PO2GFLO": "93.04",
        "PSIGROM": "99",
        "FECHA": "2024-04-01T13:58:52.000Z"
    }
}
```

- **Last Ten Registers**

Request:

```javascript
curl --location 'https://nodejs-automox-module.vercel.app/api/v1/last-ten' \
--header 'app_id: abcdefgh-ijkl-mnop-qrst-123456789012'
```
Response:

```javascript
{
    "total": 10,
    "response": [
        {
            "id": 998,
            "PSIGRAM": "1437.5",
            "PSIGLAM": "54.0",
            "PO2FLAM": "19.85",
            "CDPPPAM": "-6.0",
            "PPMCOAM": "0.0",
            "PSIG1OM": "0.0",
            "PSIG2OM": "0.0",
            "PSIG3OM": "73.64",
            "PSIG4OM": "85.96",
            "PO2G1OM": "79.75",
            "PO2G2OM": "89.9",
            "PO2G3OM": "94.51",
            "PO2G4OM": "96.04",
            "PSIGFLO": "58.75",
            "PO2GFLO": "93.16",
            "PSIGROM": "99",
            "FECHA": "2024-04-01T13:58:08.000Z"
        },
        {
            ...
        } ...
}
```

---
*Raul Bolivar Navas **@rasysbox***