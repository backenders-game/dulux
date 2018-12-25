<div class="form-group row">
  {{ html()->label(__('validation.attributes.backend.products.properties'))
      ->class('col-md-12 form-control-label')
      ->for('properties') }}

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
        {{ 'Not have properties' }}
      @endif
      </div><!--col-->
</div><!--form-group-->