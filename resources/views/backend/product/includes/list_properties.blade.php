<div class="form-group row">
    <div class="row col-md-12">
        {{ html()->label(__('validation.attributes.backend.products.properties'))
            ->class('col-md-11 form-control-label')
            ->for('properties') }}
        <div class="col-md-1">
            <button title="Thêm đặc tính mới" class="pull-right btn btn-default"
                type="button" data-toggle="modal" data-target="#modalAdminAddProperty">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </div>

      <div class="row col-md-12">
      @if(isset($properties))
      @for($i = 0; $i < count($properties); $i= $i+2)
        <div class="col-md-6">
          <div class="form-check checkbox">
            <input name="properties[]" class="form-check-input" type="checkbox" value="{{ $properties[$i]['id'] }}">
            <label class="form-check-label" for="check1">{{ $properties[$i]['name'] }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check checkbox">
            <input name="properties[]" class="form-check-input" type="checkbox" value="{{ $properties[$i+1]['id'] }}">
            <label class="form-check-label" for="check2">{{ $properties[$i+1]['name'] }}</label>
          </div>
        </div>
      @endfor
      @else
        {{ 'Không có đặc tính nào' }}
      @endif
      </div><!--col-->
</div><!--form-group-->
