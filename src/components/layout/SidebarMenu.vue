<template>
  <ul class="sidebar-menu">
    <li class="header">Funções</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Página Inicial</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/usuario" v-if="usuario.funcao == 4">
      <a>
        <i class="fa fa-address-card"></i>
        <span class="page">Cadastro de Usuário</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/salas">
      <a>
        <i class="fa fa-graduation-cap"></i>
        <span class="page">Salas</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/tags">
      <a>
        <i class="fa fa-address-book-o"></i>
        <span class="page">Lista de Funcionarios</span>
      </a>
    </router-link>


    <router-link tag="li" class="pageLink" to="/agendamento">
      <a>
        <i class="fa fa-calendar"></i>
        <span class="page">Agendamento</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "SidebarMenu",
data: () => {
  return {
    usuario: {
      funcao: 4,
    }
  }
}
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 17px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}
.treeview-title {
  z-index: 1;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
