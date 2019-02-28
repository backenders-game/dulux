@extends('backend.layouts.app')

@section('title', __('labels.backend.posts.management') . ' | ' . __('labels.backend.posts.create'))

@section('breadcrumb-links')
    @include('backend.product.includes.breadcrumb-links')
@endsection

@section('content')
    {{ html()->form('PUT', route('admin.posts.update', ['id' => $post->id])
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
                                ->class('col-md-12 form-control-label')->for('title') }}

                            <div class="col-md-12">
                                {{ html()->text('title')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.backend.posts.title'))
                                    ->attribute('maxlength', 1801)
                                    ->required()
                                    ->value($post->title)
                                    ->autofocus() }}
                            </div><!--col-->
                        </div><!--form-group-->

                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.posts.category') . '</strong>')
                                ->class('col-md-12 form-control-label')->for('category_id') }}

                            <div class="col-md-12">
                                <select class="form-control" name="category_id" value="{{$post->category_id}}">
                                    @foreach($categories as $category)
                                        <option @if($post->category_id == $category->id) selected @endif value="{{ $category->id }}">{{ $category->name }}</option>
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
                                    ->value($post->description)
                                    ->placeholder(__('validation.attributes.backend.products.description'))
                                    ->attribute('maxlength', 200)
                                    ->attribute('rows', 5) }}
                            </div><!--col-->
                        </div><!--form-group-->

                    </div><!-- end-col-md-12 -->
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' .__('validation.attributes.backend.posts.img_title') . '</strong>')
                            ->class('col-md-12 form-control-label')
                            ->for('img_title') }}

                            <div class="col-md-9">
                                {{ html()->text('img_title')
                                    ->id('img_title')
                                    ->value($post->image_small)
                                    ->class('form-control') }}
                            </div><!--col-->
                            <div class="col-md-3">
                                <button id="btnSelectImg" class="btn btn-default">Chọn Ảnh</button>
                            </div>
                            <div class="col-md-12" style="max-height: 150px;">
                                <img id="previewImg" src="{{$post->image_small}}" alt="">
                            </div>
                        </div><!--form-group-->
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <div class="form-group row">
                            {{ html()->label('<strong>' . __('validation.attributes.backend.products.user_manual') . '</strong>')
                                ->class('col-md-12 form-control-label')
                                ->for('content') }}

                            <div class="col-md-12">
                                {{ html()->textarea('content')
                                    ->class('form-control')
                                    ->value($post->content)
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
                        {{ form_cancel(route('admin.posts.index'), __('buttons.general.cancel')) }}
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
@include('ckfinder::setup')
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
        var editor = CKEDITOR.replace( 'content' );
        CKFinder.setupCKEditor(editor);
        let csrftoken = $('meta[name="csrf-token"]').attr('content');
        // =================== Display preview Image =======================================
        $('#img_title_inp').on('change', function (e) {
            readLocalImgURL(this, 'admin_img_post_preview');
        });
        $('#btnSelectImg').on('click', function (e) {
            e.preventDefault();
            selectFileWithCKFinder( 'img_title', 'previewImg' );

        })
        function selectFileWithCKFinder( elementId, previewId ) {
            CKFinder.popup( {
                chooseFiles: true,
                width: 800,
                height: 600,
                onInit: function( finder ) {
                    finder.on( 'files:choose', function( evt ) {
                        var file = evt.data.files.first();
                        var output = document.getElementById( elementId );
                        var previewer =  document.getElementById( previewId );
                        output.value = file.getUrl();
                        previewer.src = output.value;

                    } );

                    finder.on( 'file:choose:resizedImage', function( evt ) {
                        var output = document.getElementById( elementId );
                        var previewer =  document.getElementById( previewId );
                        output.value = evt.data.resizedUrl;
                        previewer.src = output.value;
                    } );
                }
            } );
        }

    });
</script>
@endpush
