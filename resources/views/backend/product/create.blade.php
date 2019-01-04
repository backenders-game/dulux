@extends('backend.layouts.app')

@section('title', __('labels.backend.products.management') . ' | ' . __('labels.backend.products.create'))

@section('breadcrumb-links')
    @include('backend.product.includes.breadcrumb-links')
@endsection

@section('content')
    {{ html()->form('POST', route('admin.products.store')
        )->class('form form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-5">
                        <h4 class="card-title mb-0">
                            @lang('labels.backend.products.management')
                            <small class="text-muted">@lang('labels.backend.products.create')</small>
                        </h4>
                    </div><!--col-->
                </div><!--row-->

                <hr>

                <div class="row mt-4 mb-4">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.products.name') . '</strong>')
                                ->class('col-md-3 form-control-label')->for('name') }}

                            <div class="col-md-9">
                                {{ html()->text('name')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.name'))
                                    ->attribute('maxlength', 501)
                                    ->required()
                                    ->autofocus() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.products.category') . '</strong>')
                                ->class('col-md-3 form-control-label')->for('category') }}

                            <div class="col-md-9">
                                <select class="form-control" name="category_id" value="">
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label('<strong>' .__('validation.attributes.backend.products.finish_surface') . '</strong>')
                            ->class('col-md-3 form-control-label')
                            ->for('finish_surface') }}

                            <div class="col-md-9">
                                <select class="form-control" name="finish_surface_id" value="">
                                `   @foreach($finishSurfaces as $finishSurface)
                                    <option value="{{ $finishSurface->id }}">{{ $finishSurface->name }}</option>
                                    @endforeach
                                </select>
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label('<strong>' .__('validation.attributes.backend.products.drying_time') . '</strong>')
                            ->class('col-md-3 form-control-label')
                            ->for('drying_time') }}

                            <div class="col-md-9">
                                {{ html()->text('drying_time')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.drying_time'))
                                    ->attribute('maxlength', 100) }}
                            </div><!--col-->
                        </div><!--form-group-->
                        <div class="form-group row">
                        {{ html()->label('<strong>' .__('validation.attributes.backend.products.coverage') . '</strong>')
                            ->class('col-md-3 form-control-label')
                            ->for('coverage') }}

                            <div class="col-md-9">
                                {{ html()->text('coverage')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.coverage'))
                                    ->attribute('max', 100)
                                    ->attribute('min', 1)
                                    ->attribute('type', 'number') }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                        {{ html()->label('<strong>' . __('validation.attributes.backend.products.num_layer') . '</strong>')
                            ->class('col-md-3 form-control-label')
                            ->for('num_layer') }}

                            <div class="col-md-9">
                                {{ html()->text('num_layer')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.num_layer'))
                                    ->attribute('max', 100)
                                    ->attribute('min', 1)
                                    ->attribute('type', 'number') }}
                            </div><!--col-->
                        </div><!--form-group-->

                    </div><!-- end-col-md-6 -->
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                        {{ html()->label('<strong>' .__('validation.attributes.backend.products.image') . '</strong>')
                            ->class('col-md-12')->for('img_path') }}

                            <div class="col-md-12">
                                {{ html()->file('img_path')
                                    ->id('img_path_inp')
                                    ->class('form-control') }}
                            </div><!--col-->
                            <div class="col-md-12" style="text-align:center; height: 16em; margin-top: 1em;">
                                <img style="width: 45%; max-height: 100%;" id="admin_img_product_preview" src="" alt="Ảnh sản phẩm" />
                            </div>
                        </div><!--form-group-->

                    </div><!-- end-col-md-6 -->
                    <div class="col-md-12 col-sm-12">
                        @include('backend.product.includes.list_properties', ['properties' => $properties])
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.products.description') . '</strong>')
                                ->class('col-md-12')->for('description') }}

                            <div class="col-md-12">
                                {{ html()->textarea('description')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.description'))
                                    ->attribute('maxlength', 200)
                                    ->attribute('rows', 2) }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.products.introduction') . '</strong>')
                                ->class('col-md-12 form-control-label')->for('introduction') }}

                            <div class="col-md-12">
                                {{ html()->textarea('introduction')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.introduction'))
                                    ->attribute('maxlength', 2000)
                                    ->attribute('rows', 5) }}
                            </div><!--col-->
                        </div><!--form-group-->
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' . __('validation.attributes.backend.products.construction_guide') . '</strong>')
                                ->class('col-md-12 form-control-label')->for('construction_guide') }}

                            <div class="col-md-12">
                                {{ html()->textarea('construction_guide')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.construction_guide'))
                                    ->attribute('maxlength', 2000)
                                    ->attribute('rows', 11) }}
                            </div><!--col-->
                        </div><!--form-group-->
                    </div>
                    <div class="col-md-7 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' . __('validation.attributes.backend.products.user_manual') . '</strong>')
                                ->class('col-md-12 form-control-label')
                                ->for('user_manual') }}

                            <div class="col-md-12">
                                {{ html()->textarea('user_manual')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.user_manual'))
                                    ->attribute('maxlength', 2000)
                                    ->attribute('rows', 10) }}

                            </div><!--col-->
                        </div><!--form-group-->
                    </div>
                    <div class="col-md-5 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' . __('validation.attributes.backend.products.protection_info') . '</strong>')
                                ->class('col-md-12 form-control-label')
                                ->for('protection_info') }}

                            <div class="col-md-12">
                                {{ html()->textarea('protection_info')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.protection_info'))
                                    ->attribute('maxlength', 2000)
                                    ->attribute('rows', 15) }}
                            </div><!--col-->
                        </div><!--form-group-->
                    </div><!-- end-col-12 -->
                    <div class="col-md-12">

                    </div><!-- end-col-12 -->

                    <div class="col-md-12 d-flex justify-content-center">
                        <button type="button" data-toggle="modal" data-target="#modalAdminSelectColor"
                            class="btn btn-primary" id="btn_choose_color">Chọn màu</button>
                    </div>
                </div><!--row-->
            </div><!--card-body-->

            <div class="card-footer clearfix">
                <div class="row">
                    <div class="col">
                        {{ form_cancel(route('admin.auth.user.index'), __('buttons.general.cancel')) }}
                    </div><!--col-->

                    <div class="col text-right">
                        {{ form_submit(__('buttons.general.crud.create')) }}
                    </div><!--col-->
                </div><!--row-->
            </div><!--card-footer-->
        </div><!--card-->
    {{ html()->form()->close() }}
    @include('backend.product.includes.modal_create_property')
    @include('backend.product.includes.modal_create_color')
    @include('backend.product.includes.modal_select_color')
@endsection
@push('after-scripts')
{{ script(asset('js/ckeditor/ckeditor.js')) }}
<script type="text/javascript">
    function readLocalImgURL(input, imgId) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#' + imgId).attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $(document).ready(function () {
        CKEDITOR.replace( 'user_manual' );
        let csrftoken = $('meta[name="csrf-token"]').attr('content');
        // =================== Display preview Image =======================================
        $('#img_path_inp').on('change', function (e) {
            readLocalImgURL(this, 'admin_img_product_preview');
        });
        // ===================================== Add Property ==============================
        $('#admin_btn_add_property').click(function () {
            let propertyName = $('#property_name_inp') ? $('#property_name_inp').val() : '';
            if (!propertyName || propertyName.length === 0) {
                $('#property_name_error').html('Hãy nhập tên đặc tính');
            } else {
                $.ajax({
                    url: "{{ route('admin.properties.store')}}",
                    type: 'POST',
                    data: {
                        name: propertyName,
                        _token: csrftoken
                    },
                    success: function (response) {
                        console.log('success ', response);
                        $('#list_properties').append(`
                            <div class="col-md-6">
                                <div class="form-check checkbox">
                                    <input name="properties[]" class="form-check-input" type="checkbox" value="${response.id}">
                                    <label class="form-check-label" for="check1">${response.name}</label>
                                </div>
                            </div>
                        `)
                        $('#property_name_inp').val('');
                        $('#modalAdminAddProperty').modal('hide');
                    },
                    error: function (error) {
                        alert('Đã có lỗi xảy ra. Vui lòng thử lại!');
                    }
                });
            }
        });

        // ======================== Add Color ===================================
        $('#admin_btn_add_color').click(function (e){
            e.preventDefault();
            let valueArray = $('#admin_form_add_color').serializeArray();
            let values = {};
            let regArrayField = /\[\]$/
            valueArray.forEach((field) => {
                let fieldName = field.name;
                if (regArrayField.test(fieldName)) {
                    fieldName = fieldName.replace(regArrayField, '');
                    if (!values.hasOwnProperty(fieldName)) {
                        values[fieldName] = [field.value];
                    } else {
                        values[fieldName].push(field.value);
                    }
                } else {
                    values[fieldName] = field.value;
                }
            });
            console.log('value', values);
            let submitColorData = {
                _token: csrftoken,
                name: values.color_name || '',
                color: values.color_color || '',
                color_group_id: values.color_colorgroupid || 0,
                is_deep_color: values.color_is_deep_color || 0,
                mixed_by_computer: values.color_mixed_by_computer || 0,
                surfaces: values.color_surfaces || [],
                projectTypes: values.color_projecttypes || []
            }

            $.ajax({
                url: "{{ route('admin.colors.store')}}",
                type: 'POST',
                data: submitColorData,
                success: function(data) {
                    console.log('add color successfully', data);
                },
                error: function (err) {
                    console.log(err);
                }
            })
        });
        // ====================================== Select Color ===========================
        $('.color-item').on('change', function (e) {
            $(this).find('svg').toggleClass('fa-check');
            let dataIcon = $(this).find('svg').data('icon');
            if (!dataIcon) {
                $(this).find('svg').attr('data-icon', 'ckeck');
            } else {
                $(this).find('svg').attr('data-icon', null)
            }
        });

    });
</script>
@endpush
