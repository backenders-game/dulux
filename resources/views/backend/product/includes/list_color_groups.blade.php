<div class="form-group row">
    <div class="row col-md-12">
        {{ html()->label('<strong>' . __('validation.attributes.backend.products.colors') . '</strong>')
            ->class('col-md-11 form-control-label') }}
        <div class="col-md-1">
            <button title="Thêm màu mới" class="btn btn-default pull-right"
                type="button" data-toggle="modal" data-target="#modalAdminAddColor">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </div>
    <div class="row col-md-12">
        @isset($colorGroups)
        @foreach($colorGroups as $colorGroup)
        <div class="col-md-12">
            <label class="col-md-12">{{ $colorGroup->name }}</label>
            @foreach($colors as $color)
                @if($color->color_group_id == $colorGroup->id)
                <div class="col-md-2">
                    <div class="form-check checkbox">
                        <label class="form-check-label" for="check1">
                            <input name="properties[]" class="form-check-input"
                                type="checkbox" value="{{ $color->id }}">
                                {{ $color->name }}
                        </label>
                    </div>
                </div>
                @endif
            @endforeach
        </div><!--col-->
        @endforeach
        @else
            {{'Không có nhóm màu nào'}}
        @endisset
    </div>
</div><!--form-group-->
