document.addEventListener('DOMContentLoaded', () => {
    const ventaContainer = document.querySelector('#venta .row');
    const alquilerContainer = document.querySelector('#alquiler .row');

    // Renderizar primeras 3 propiedades de venta y alquiler
    renderPropiedades(propiedades_venta, ventaContainer, 3);
    renderPropiedades(propiedades_alquiler, alquilerContainer, 3);

    // enlaces botones
    document.querySelector('#venta .btn-dark').href = 'propiedades_venta.html';
    document.querySelector('#alquiler .btn-dark').href = 'propiedades_alquiler.html';
});