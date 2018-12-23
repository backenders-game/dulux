@extends('backend.layouts.app')
@push('after-styles')
{{ style(mix('css/datatable.css')) }}
@endpush
@section('title', app_name() . ' | ' . __('labels.backend.products.management'))

@section('breadcrumb-links')
    @include('backend.product.includes.breadcrumb-links')
@endsection

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.products.management') }} <small class="text-muted">{{ __('labels.backend.access.users.active') }}</small>
                </h4>
            </div><!--col-->

            <div class="col-sm-7">

            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered dt-responsive nowrap"
                        id="backend_colorgroup_table" style="width: 100%;">
                        <thead>
                        <tr>
                            <th>@lang('labels.backend.products.table.no')</th>
                            <th>Ảnh</th>
                            <th>@lang('labels.backend.products.table.name')</th>
                            <th>@lang('labels.backend.products.table.created_at')</th>
                            <th>@lang('labels.backend.products.table.updated_at')</th>
                            <th>@lang('labels.general.actions')</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
</div><!--card-->
@endsection
@push('after-scripts')
{!! script(mix('js/datatable.js')) !!}
<script>
$(document).ready(function() {
    let baseURL = 'http://localhost/dulux/public';
    let url = "{{ route('admin.products.datatables') }}";
    let csrftoken = $('meta[name="csrf-token"]').attr('content');
    $('#backend_colorgroup_table').DataTable({
        serverSide: true,
        processing: true,
        fixedHeader: true,
        pageLength: 10,
        ajax: {
            data: {
                _token: csrftoken
            },
            dataSrc: function ( json ) {
                if(json._token !== undefined) $('meta[name=csrf_token]').attr("content", json._token);
                return json.data;
            },
            url: url,
            type: 'POST',
            error: function(data){
                console.log(data);
            }
        },
        columns: [
            {data: null, name: null, orderable: false, searchable: false},
            {data: 'img_path', name: 'img_path', orderable: false, searchable: false},
            {data: 'name', name: 'name'},
            {data: 'created_at', name: 'created_at'},
            {data: 'updated_at', name: 'updated_at'},
            {data: null, name: null, orderable: false, searchable: false}
        ],
        fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            var index = iDisplayIndexFull +1;
            $('td:eq(0)',nRow).html(index);
            $('td:eq(1)', nRow).html('<img style="width: 70px; height: 80px;" src="' + baseURL + '/' + aData.img_path  + '">');
            $('td:eq(5)', nRow)
                .html('<a href="admin/color-groups/' + aData.id + '"  class="btn btn-warning btn-sm"><i class="fas fa-pencil-alt"></i> Edit</a>');
            return nRow;
        }
    })
})
</script>
@endpush
