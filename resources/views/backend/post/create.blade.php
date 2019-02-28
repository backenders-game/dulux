@extends('backend.layouts.app')

@section('title', __('labels.backend.posts.management') . ' | ' . __('labels.backend.posts.create'))

@section('breadcrumb-links')
    @include('backend.product.includes.breadcrumb-links')
@endsection

@section('content')
    {{ html()->form('POST', route('admin.posts.store')
        )->class('form form-horizontal')->attribute('enctype', 'multipart/form-data')
        ->attribute('accept-charset', 'utf-8')->open() }}
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-5">
                        <h4 class="card-title mb-0">
                            @lang('labels.backend.posts.management')
                            <small class="text-muted">@lang('labels.backend.posts.create')</small>
                        </h4>
                    </div><!--col-->
                </div><!--row-->

                <hr>

                <div class="row mt-4 mb-4">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.posts.title') . '</strong>')
                                ->class('col-md-3 form-control-label')->for('title') }}

                            <div class="col-md-9">
                                {{ html()->text('title')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.posts.title'))
                                    ->attribute('maxlength', 1801)
                                    ->required()
                                    ->autofocus() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.posts.category') . '</strong>')
                                ->class('col-md-3 form-control-label')->for('category_id') }}

                            <div class="col-md-9">
                                <select class="form-control" name="category_id" value="">
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                            </div><!--col-->
                        </div><!--form-group-->
                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.products.description') . '</strong>')
                                ->class('col-md-12')->for('description') }}
                            <div class="col-md-12">
                                {{ html()->textarea('description')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.products.description'))
                                    ->attribute('maxlength', 200)
                                    ->attribute('rows', 5) }}
                            </div><!--col-->
                        </div><!--form-group-->

                    </div><!-- end-col-md-12 -->
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.posts.img_title') . '</strong>')
                            ->class('col-md-3 form-control-label')
                            ->for('img_title') }}

                            <div class="col-md-9">
                                {{ html()->file('img_title')
                                    ->id('img_title_inp')
                                    ->class('form-control') }}
                            </div><!--col-->
                        </div><!--form-group-->
                    </div>
                    <div class="col-md-12 col-sm-12">
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
                </div><!--row-->
            </div><!--card-body-->

            <div class="card-footer clearfix">
                <div class="row">
                    <div class="col">
                        {{ form_cancel(route('admin.products.index'), __('buttons.general.cancel')) }}
                    </div><!--col-->

                    <div class="col text-right">
                        {{ form_submit(__('buttons.general.crud.create')) }}
                    </div><!--col-->
                </div><!--row-->
            </div><!--card-footer-->
        </div><!--card-->
    {{ html()->form()->close() }}
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
        $('#img_title_inp').on('change', function (e) {
            readLocalImgURL(this, 'admin_img_post_preview');
        });

    });
</script>
@endpush
