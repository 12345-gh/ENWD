<script setup>

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      MY TEST SITE LOGO
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <NuxtLink to="/" class="navbar-item">
          Home
        </NuxtLink>

        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink to="/display-nested" class="navbar-link">
            Display displayNested
          </NuxtLink>

          <div class="navbar-dropdown">
            <NuxtLink to="/display-nested/todos" class="navbar-item">
              Todos
            </NuxtLink>

            <NuxtLink to="/display-nested/photos" class="navbar-item">
              Photos
            </NuxtLink>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink to="/display" class="navbar-link">
            Display
          </NuxtLink>

          <div class="navbar-dropdown">
            <NuxtLink to="/display/todos" class="navbar-item">
              Todos
            </NuxtLink>

            <NuxtLink to="/display/photos" class="navbar-item">
              Photos
            </NuxtLink>
          </div>
        </div>



      </div>
    </div>
  </nav>
</template>
