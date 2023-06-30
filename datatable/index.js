$(document).ready(function() {

    var table = $('#table_sgic').DataTable({
        bFilter: true,
        paging: true,
        ordering: true,
        info: false,
        "oLanguage": {
            "sLengthMenu": "Mostrar _MENU_ resultados",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            }
        },
        "language": {
            "emptyTable": "No hay datos disponibles",
            "sSearch": "Buscar:",
            "zeroRecords": "No se encontraron datos"
        },
            initComplete: function () {
                this.api().columns([1,2]).every( function () {
                    var column = this;
                    var select = $('<select><option value=""></option></select>')
                        .appendTo( $("#table_sgic thead tr:eq(1) th").eq(column.index()).empty() )
                        .on( 'change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
    
                            column
                                .search( val ? '^'+val+'$' : '', true, false )
                                .draw();
                        } );
    
                    column.data().unique().sort().each( function ( d, j ) {
                        select.append( '<option value="'+d+'">'+d+'</option>' );
                    } );
                } );
            }
      } );
      });
   
  
  