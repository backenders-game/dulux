@extends('backend.layouts.app')
@push('after-styles')
{{ style(mix('css/datatable.css')) }}
@endpush
@section('title', app_name() . ' | ' . __('labels.backend.access.users.management'))

@section('breadcrumb-links')
    @include('backend.colorgroup.includes.breadcrumb-links')
@endsection

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.colorgroups.management') }} <small class="text-muted">{{ __('labels.backend.access.users.active') }}</small>
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
                            <th>@lang('labels.backend.colorgroups.table.no')</th>
                            <th>@lang('labels.backend.colorgroups.table.name')</th>
                            <th>@lang('labels.backend.colorgroups.table.color')</th>
                            <th>@lang('labels.backend.colorgroups.table.created_at')</th>
                            <th>@lang('labels.backend.colorgroups.table.updated_at')</th>
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
    let url = "{{ route('admin.color-groups.datatables') }}";
    let csrftoken = $('meta[name="csrf-token"]').attr('content');
    $('#backend_colorgroup_table').DataTable({
        serverSide: true,
        processing: true,
        fixedHeader: {
            header: true,
            footer: true,
            headerOffset: $('.app-header').outerHeight()
        },
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
            {data: 'name', name: 'name'},
            {data: 'basic_color', name: 'basic_color'},
            {data: 'created_at', name: 'created_at'},
            {data: 'updated_at', name: 'updated_at'},
            {data: null, name: null, sortable: false, searchable: false}
        ],
        fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            var index = iDisplayIndexFull +1;
            $('td:eq(2)', nRow).html('<div style="width: 90%; height: 35px; background-color: ' + aData.basic_color + '"></div>')
            $('td:eq(0)',nRow).html(index);
            $('td:eq(5)', nRow)
                .html('<a href="admin/color-groups/' + aData.id + '"  class="btn btn-warning btn-sm"><i class="fas fa-pencil-alt"></i> Edit</a>');
            return nRow;
        }
    })
})
</script>
@endpush
