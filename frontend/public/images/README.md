# Images Directory

Drop your wedding photos into this folder:

- `church.jpg` — Ummanoor Mar Semavoon, Desthuni Orthodox Church, Kottarakara
- `reception.jpg` — Uthiram Auditorium, Punniyam, Kanyakumari
- `couple.jpg` — Robin & Benigla portrait photo
- `betrothal.jpg` — Betrothal / Engagement celebration photo
- `haldi.jpg` — Haldi ceremony photo
- `maduramvepp.jpg` — Maduramvepp sweetening ceremony photo

### How to use in `src/data/weddingData.js`:
Any image placed in `frontend/public/images/` can be directly referenced as:
```javascript
image: "/images/church.jpg"
image: "/images/reception.jpg"
image: "/images/couple.jpg"
```
Vite serves everything inside `public/` directly at the root URL.

