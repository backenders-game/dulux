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
                <div class="col-md-12 row">
                    <div class="form-group col-md-6">
                        <label for="colorGroup" class="form-control-label">Nhóm màu:</label>
                        <select class="form-control" name="colorGroup" id="select_colorgroup">
                            <option value="">Chọn nhóm màu</option>
                            @foreach($colorGroups as $colorGroup)
                            <option value="{{$colorGroup->id}}">
                            {{$colorGroup->name}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="color_search_inp" class="form-control-label">
                        Tìm kiếm:</label>
                        <input type="text" id="color_search_inp" class="form-control" placeholder="Tên màu...">

                    </div>
                    <div class="form-group col-md-12">
                        <label for="" class="form-control-label">
                        <input type="checkbox" class="form-control" id="select_all_colors">
                        Chọn tất cả
                        </label>
                    </div>
                </div>
                @foreach($colorGroups as $colorGroup)
                <div class="row col-md-12 color_group_grid color_group_grid_{{$colorGroup->id}} d-none" colorgroupid="{{$colorGroup->id}}">
                    <div class="col-md-12 row">
                        @foreach($colors as $color)
                        @if ($color->color_group_id == $colorGroup->id && !$color->is_deep_color)
                            @isset($productColors)
                            <div style="border: 1px solid #fff !important; height: 4rem !important; background: {{$color->color}};"
                                data-id="{{$color->name}}"
                                class="col-md-3 col-xs-6 color-box-item">
                                <label class="form-control-label" for="color_item_{{$color->id}}">
                                    <input class="color-item" id="color_item_{{$color->id}}"
                                        type="checkbox" @if(in_array($color->id, $productColors)) checked="true" @endif
                                        value="{{$color->id}}" />
                                    {{$color->name}}
                                </label>
                            </div>
                            @else
                            <div style="border: 1px solid #fff !important; height: 4rem !important; background: {{$color->color}};"
                                data-id="{{$color->name}}"
                                class="col-md-3 col-xs-6 color-box-item">
                                <label class="form-control-label" for="color_item_{{$color->id}}">
                                    <input class="color-item" id="color_item_{{$color->id}}" type="checkbox"
                                        value="{{$color->id}}" />
                                    {{$color->name}}
                                </label>
                            </div>
                            @endisset
                        @endif
                        @endforeach
                    </div>
                    <div class="col-md-12">
                        <h4><strong>Màu trầm</strong></h4>
                    </div>
                    <div class="col-md-12 row">
                        @foreach($colors as $color)
                        @if ($color->color_group_id == $colorGroup->id && $color->is_deep_color)
                            @isset($productColors)
                            <div style="border: 1px solid #fff !important; height: 4rem !important; background: {{$color->color}};"
                                data-id="{{$color->name}}"
                                class="col-md-3 col-xs-6 color-box-item" >
                                <label class="form-control-label" for="color_item_{{$color->id}}">
                                    <input id="color_item_{{$color->id}}" type="checkbox"
                                    @if(in_array($color->id, $productColors)) checked="true" @endif
                                        class="color-item" value="{{$color->id}}" />
                                    {{$color->name}}
                                </label>
                            </div>
                            @else
                            <div style="border: 1px solid #fff !important; height: 4rem !important; background: {{$color->color}};"
                                data-id="{{$color->name}}"
                                class="col-md-3 col-xs-6 color-box-item" >
                                <label class="form-control-label" for="color_item_{{$color->id}}">
                                    <input id="color_item_{{$color->id}}" type="checkbox"
                                        class="color-item" value="{{$color->id}}" />
                                    {{$color->name}}
                                </label>
                            </div>
                            @endisset
                        @endif
                        @endforeach
                    </div>
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
