# 🚀 LayerBond3D - Magazin Online Premium (Accesorii Auto)

Acesta este codul complet și funcțional pentru magazinul online **LayerBond3D**, optimizat cu tematică întunecată (Dark Mode), accente albastre neon și un sistem interactiv de administrare a produselor și coșului de cumpărături.

---

## 📂 Structura Folderului

Pentru a rula sau modifica proiectul, asigură-te că ai fișierele organizate astfel:
*   `index.html` -> Conține structura paginii, stilurile CSS, logica JavaScript și imaginile premium pre-integrate.
*   `README.md` -> Acest ghid de utilizare.

---

## 🛠️ Cum funcționează site-ul?

1. **Afișare Dinamică:** Produsele sunt stocate într-o listă specială în cod (în secțiunea `<script>`) și se randează singure pe ecran.
2. **Selector de Culori:** Fiecare produs are cerculețe interactive pentru culorile **Negru**, **Alb** și **Albastru**. Culoarea selectată se transmite direct în coș!
3. **Coș Lateral (Sidebar):** Când adaugi un produs, din dreapta glisează un panou fluid. Poți adăuga mai multe bucăți sau poți șterge elemente cu ajutorul butonului „Șterge”, iar prețul total se recalculează instant.

---

## ⚙️ Cum schimbi produsele sau prețurile?

Dacă vrei să schimbi denumirea unui produs, prețul sau să pui o altă imagine (de exemplu, cele din machetele tale precum `image_6.png`), deschide `index.html` cu un editor de text (Notepad, VS Code) și caută lista de la linia block-ului JavaScript (`const products = [...]`).

Fiecare produs arată așa și poate fi editat manual:
```javascript
{ 
    id: 1, 
    title: "Numele Produsului Tău", 
    price: 79.99, 
    image: "aici_pui_linkul_sau_numele_pozei.jpg" 
}
