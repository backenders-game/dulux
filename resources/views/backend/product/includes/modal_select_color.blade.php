<!-- /.modal-->
<div class="modal fade" id="modalAdminSelectColor" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-primary modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ __('labels.backend.colors.chooser_grid')}}</h4>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group col-md-12">
                    <label for="colorGroup" class="form-control-label">Nhóm màu:</label>
                    <select class="form-control" name="colorGroup" id="select_colorgroup">
                        @foreach($colorGroups as $colorGroup)
                        <option value="{{$colorGroup->id}}">
                        {{$colorGroup->name}}
                        </option>
                        @endforeach
                    </select>
                </div>
                @foreach($colorGroups as $colorGroup)
                <div class="col-md-12 row">
                    @foreach($colors as $color)
                    @if ($color->color_group_id == $colorGroup->id)
                        <div style=" height: 4rem !important; background: {{$color->color}};"
                            class="color-item col-md-3 col-xs-6">
                            <label class="form-control-label" for="color_item_{{$color->id}}">
                                <input id="color_item_{{$color->id}}" type="checkbox"
                                    class="color-item" value="{{$color->id}}" />
                                {{$color->name}}
                            </label>
                        </div>
                    @endif
                    @endforeach
                </div>
                @endforeach
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">{{__('buttons.general.cancel')}}</button>
                <button id="admin_btn_choose_color" class="btn btn-primary" type="button">{{ __('buttons.general.choose_and_continue') }}</button>
            </div>
        </div>
        <!-- /.modal-content-->
    </div>
    <!-- /.modal-dialog-->
</div>
<!-- /.modal-->
