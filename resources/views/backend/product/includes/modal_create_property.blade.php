<!-- /.modal-->
<div class="modal fade" id="modalAdminAddProperty" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-primary" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">{{ __('labels.backend.properties.create')}}</h4>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <form class="form form-horizontal" id="admin_form_add_property">
            <div class="modal-body">
                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.properties.name') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('property_name') }}

                        <div class="col-md-9">
                            {{ html()->text('property_name')
                            ->class('form-control')
                            ->id('property_name_inp')
                            ->placeholder(__('validation.attributes.backend.properties.name'))
                            ->attribute('maxlength', 501)
                            ->required()
                            ->autofocus() }}
                            <span id="property_name_error"></span>
                        </div><!--col-->
                    </div><!--form-group-->
                </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">{{__('buttons.general.cancel')}}</button>
                <button id="admin_btn_add_property" class="btn btn-primary" type="button">{{ __('buttons.general.crud.create') }}</button>
            </div>
        </form>
        </div>
        <!-- /.modal-content-->
    </div>
    <!-- /.modal-dialog-->
</div>
<!-- /.modal-->
