# 🏨 Unravel Room Listing App

A high-performance, responsive React application for listing rooms with rich media (videos/images), infinite scrolling, and a focus on smooth UX.

URL: https://unravel-infinite-scroll-jqb7.vercel.app/
---

## 🚀 Features

- 🔁 **Infinite scroll** to fetch and render room listings on demand.
- 📦 **Global media cache** via React Context to prevent duplicate shimmer UI.
- 🖼️ **Media carousel** using `keen-slider` for both images and videos.
- ✨ **Skeleton loaders** while media content loads.
- 📱 **Responsive design** using TailwindCSS.
- ⚛️ **Reusable and modular components** built for scale and flexibility.

---

## ⚙️ Setup

1. **Install dependencies**

```bash
npm install
```

2. **Start Project**

```bash
npm run dev
```
---

## 🎯 Performance Optimizations
- ✅ **Shared Media Cache**

    All media (images/videos) are tracked via MediaCacheContext.

- ✅ **Skeleton UI**

    While loading video or image, a SkeletonCard is shown.

    Improves perceived performance and avoids layout shifts.

- ✅ **Keen-Slider**
    
    Responsive and lightweight carousel solution for media.

    Supports autoplay videos and lazy-loading images.

- ✅ **Reusability**
    
    MediaRenderer is completely reusable across RoomCard and VariantCard.

    Easily scalable for future pages like property listings, gallery views, etc.


---
