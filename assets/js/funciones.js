// Función renderizar propiedades
function renderPropiedades(propiedades, container, limite = null) {
  // Limpiar contenedor
  container.innerHTML = '';

  // Renderizar propiedades (limitadas o todas)
  const propiedadesARenderizar = limite ? propiedades.slice(0, limite) : propiedades;

  propiedadesARenderizar.forEach(propiedad => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');

      // ícono fumar
      const smokeIcon = propiedad.smoke
          ? '<i class="fas fa-smoking text-success"></i> Permitido fumar'
          : '<i class="fas fa-smoking-ban text-danger"></i> No se permite fumar';

      // ícono mascotas
      const petsIcon = propiedad.pets
          ? '<i class="fas fa-paw text-success"></i> Mascotas permitidas'
          : '<i class="fas fa-ban text-danger"></i> No se permiten mascotas';

      card.innerHTML = `
          <div class="card">
              <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
              <div class="card-body">
                  <h5 class="card-title">${propiedad.nombre}</h5>
                  <p class="card-text">${propiedad.descripcion}</p>
                  <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                  <p>
                      <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                      <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                  <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                      ${smokeIcon}
                  </p>
                  <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                      ${petsIcon}
                  </p>
              </div>
          </div>
      `;
      container.appendChild(card);
  });
}