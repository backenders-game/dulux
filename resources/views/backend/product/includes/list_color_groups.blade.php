<div class="form-group row">
    {{ html()->label('<strong>' . __('validation.attributes.backend.products.colors') . '</strong>')
        ->class('col-md-12 form-control-label')
        ->for('colors') }}
    @isset($colorGroups)
    @foreach($colorGroups as $colorGroup)
    <div class="col-md-12">
        <label class="col-md-12">{{ $colorGroup->name }}</label>
        @foreach($colors as $color)
            @if($color->color_group_id == $colorGroup->id)
            <div class="col-md-1">
                {{ $color->name }}
            </div>
            @endif
        @endforeach
    </div><!--col-->
    @endforeach
    @else
        {{'Không có nhóm màu nào'}}
    @endisset
</div><!--form-group-->
