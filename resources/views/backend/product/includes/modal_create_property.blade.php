<!-- /.modal-->
<div class="modal fade" id="modalAdminAddProperty" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-primary" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">{{ 'Them dac tinh moi'}}</h4>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <form class="form form-horizontal" id="admin_form_add_property">
            <div class="modal-body">
                <div class="form-group row">
                    <label>Ten dac tinh: </label>
                    <input type="text" class="form-control" name="property_name" value="">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button id="admin_btn_add_property" class="btn btn-primary" type="button">{{ __('buttons.general.crud.create') }}</button>
            </div>
        </form>
        </div>
        <!-- /.modal-content-->
    </div>
    <!-- /.modal-dialog-->
</div>
<!-- /.modal-->
