<template>
  <div class="flex flex-row gap-6 place-content-center mt-64">
      <button class="btn btn-primary">
     Primary
    </button>
    <button class="btn btn-secondary">
    Secondary
    </button>
    <button class="btn btn-tertiary">
    Tertiary
    </button>
  </div>

</template>
  
<style lang="scss">
.btn {
  font-weight: var(--pds-font-weight-roboto-600);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: var(--pds-rounded-lg);
}
.btn-primary {
  background-color: var(--pds-interactive-01);
  color: var(--pds-text-04);
}
.btn-primary:hover {
  background-color: var(--pds-hover-primary);
}
.btn-secondary {
  background-color: var(--pds-interactive-02);
  color: var(--pds-text-04);
}
.btn-secondary:hover {
  background-color: var(--pds-hover-secondary);
}
.btn-tertiary {
  border-color: var(--pds-interactive-03);
  border-width: 1px;
  color: var(--pds-interactive-03);
}
.btn-tertiary:hover{
  background-color: var(--pds-hover-tertiary);
  color: var(--pds-text-04);
}

  </style>