<!-- /.modal-->
<div class="modal fade" id="modalAdminAddColor" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-primary" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">{{ __('labels.backend.colors.create')}}</h4>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <form class="form form-horizontal" id="admin_form_add_color">
            <div class="modal-body">
                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.name') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('color_name_inp') }}

                    <div class="col-md-9">
                        {{ html()->text('color_name')
                        ->class('form-control')
                        ->id('color_name_inp')
                        ->placeholder(__('validation.attributes.backend.colors.name'))
                        ->attribute('maxlength', 501)
                        ->required()
                        ->autofocus() }}
                        <span id="property_name_error"></span>
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.color') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('color_color_inp') }}

                    <div class="col-md-9">
                        {{ html()->text('color_color')
                            ->class('form-control')
                            ->id('color_color_inp')
                            ->placeholder(__('validation.attributes.backend.colors.color'))
                            ->attribute('maxlength', 501)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.colorgroup') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('color_colorgroupid_inp') }}

                    <div class="col-md-9">
                        <select id="color_colorgroupid_inp" class="form-control" name="color_colorgroupid" value="">
                            @isset($colorGroups)
                            @foreach($colorGroups as $colorGroup)
                                <option value="{{ $colorGroup->id }}">{{ $colorGroup->name }}</option>
                            @endforeach
                            @endisset
                        </select>
                    </div>
                </div>

                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.is_deep_color') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('checkbox_color_is_deep') }}
                    <div class="col-md-9">
                        <input id="checkbox_color_is_deep" name="color_is_deep_color" class="form-check-control"
                            type="checkbox" value="1">
                    </div>
                </div>


                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.mixed_by_computer') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('checkbox_mixed_by_computer') }}

                    <div class="col-md-9">
                        <input id="checkbox_mixed_by_computer" name="color_mixed_by_computer" class="form-check-control"
                            type="checkbox" value="1">
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.color_surfaces') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('color_surfaces') }}
                    <div class="col-md-9 row">
                        @isset($surfaces)
                            @foreach($surfaces as $surface)
                            <div class="col-md-4">
                                <div class="form-check checkbox">
                                    <label class="form-check-label" for="color_surfaces_{{$surface->id}}">
                                        <input id="color_surfaces_{{$surface->id}}" name="color_surfaces[]" class="form-check-input"
                                            type="checkbox" value="{{$surface->id}}" checked>
                                            {{ $surface->name }}
                                    </label>
                                </div>
                            </div>
                            @endforeach
                        @else
                            {{'Không có bề mặt cần sơn'}}
                        @endisset
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                    {{ html()->label('<strong>' .__('validation.attributes.backend.colors.color_surfaces') . '</strong>')
                        ->class('col-md-3 form-control-label')
                        ->for('color_surfaces') }}
                    <div class="col-md-9 row">
                        @isset($projectTypes)
                            @foreach($projectTypes as $projectType)
                            <div class="col-md-4">
                                <div class="form-check checkbox">
                                    <label class="form-check-label" for="color_projecttypes_{{$projectType->id}}">
                                        <input id="color_projecttypes_{{$projectType->id}}" name="color_projecttypes[]" class="form-check-input"
                                            type="checkbox" value="{{$projectType->id}}" checked>
                                            {{ $projectType->name }}
                                    </label>
                                </div>
                            </div>
                            @endforeach
                        @else
                            {{'Không có nơi cần sơn'}}
                        @endisset
                    </div><!--col-->
                </div><!--form-group-->
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">{{__('buttons.general.cancel')}}</button>
                <button id="admin_btn_add_color" class="btn btn-primary" type="button">{{ __('buttons.general.crud.create') }}</button>
            </div>
        </form>
        </div>
        <!-- /.modal-content-->
    </div>
    <!-- /.modal-dialog-->
</div>
<!-- /.modal-->
