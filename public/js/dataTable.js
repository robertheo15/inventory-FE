var dataTable = new DataTable("#myTable", {
  searchable: true,
  sortable: true,
  fixedHeight: true,
  layout: {
      top: "{select}{search}",
      bottom: "{pager}{info}"
  },
});