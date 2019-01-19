<div id="filter-wrapper-clp" class="filter-wrapper filter-wrapper-clp filter-wrapper-fullwidth active">
<div class="title-section">
    <h2 class="text-center">Bộ lọc</h2>
    <svg class="icon icon-close right">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="">
    <symbol viewBox="0 0 32 19.91" id="icon-collapse-arrow" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M31.17.62a2.46 2.46 0 0 0-3.48.2L16 14 4.3.83A2.46 2.46 0 1 0 .62 4.1L14 19.09a2.46 2.46 0 0 0 1.84.83h.38a2.46 2.46 0 0 0 1.78-.83l13.35-15a2.46 2.46 0 0 0-.18-3.47z" data-name="Layer 1"></path></g></symbol>
    </use>
    </svg>
</div>
<div class="clp-wrap collapse-wrap accordeon">
    <div id="form-color-room-type" class="form-color-room-type form-collapse collapse-area focus-outline">
    <div class="collapse-trigger accordeon-collapse-trigger-processed">
        Nơi cần sơn<span class="count-label input-counter counter-projecttype">1</span>
        <svg class="icon icon-collapse-arrow right">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="">
            <!-- <symbol viewBox="0 0 32 19.91" id="icon-collapse-arrow" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2"><path d="M31.17.62a2.46 2.46 0 0 0-3.48.2L16 14 4.3.83A2.46 2.46 0 1 0 .62 4.1L14 19.09a2.46 2.46 0 0 0 1.84.83h.38a2.46 2.46 0 0 0 1.78-.83l13.35-15a2.46 2.46 0 0 0-.18-3.47z" data-name="Layer 1"></path></g></symbol> -->
        </use>
        </svg>
    </div>
    <div class="collapse-content amountCount filter-projecttypes hidden">
        <div class="form-type-radios form-item-color-room-type form-item form-group append-outline-processed">
        <div id="edit-color-room-type--2" class="form-radios color-room-type">
            <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
            <input data-label="Tất cả các phòng" type="radio" value="0"
                id="edit-color-room-type-all--2" name="color_room_type"
                class="color-projecttype form-radio ajax-processed CLPLocationChange-processed"
                tabindex="53">
            <label class="option" for="edit-color-room-type-all--2">Tất cả các phòng</label>
            <span class="radio-outline"></span>
            </div>
            @foreach($projectTypes as $projectType)
            <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
            <input data-label="{{$projectType->name}}" type="radio" value="{{$projectType->id}}"
                id="edit-color-room-type-{{$projectType->id}}--2" name="color_room_type"
                class="color-projecttype form-radio ajax-processed CLPLocationChange-processed"
                tabindex="54">
                <label class="option" for="edit-color-room-type-{{$projectType->id}}--2">{{$projectType->name}}</label>
            <span class="radio-outline"></span>
            </div>
            @endforeach
        </div>
        </div>
        <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="62">Show more [+]</a>
        <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="63">Show less [-]</a>
    </div>
    </div>
    <div id="form-color-surface-usage" class="form-color-surface-usage form-collapse collapse-area">
    <div class="collapse-trigger accordeon-collapse-trigger-processed">
        Bề mặt cần sơn<span class="count-label counter-label-surfaces input-counter">0</span>
        <svg class="icon icon-collapse-arrow right">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
        </svg>
    </div>
    <div class="collapse-content amountCount filter-surfaces hidden">
        <div id="edit-color-surface-usage--2" class="form-checkboxes color-surface">
        @foreach($surfaces as $surface)
        <div class="form-type-checkbox form-item-color-surface-usage-Trần-nhà form-item checkbox append-outline-processed">
            <input data-label="{{$surface->name}}" type="checkbox"
            id="edit-color-surface-usage-{{$surface->id}}--2" name="color_surface_usage[{{$surface->id}}]"
            value="{{$surface->id}}" class="form-color-surface-item color-surface form-checkbox CLPSurfaceChange-processed"
            tabindex="64">
            <label class="option" for="edit-color-surface-usage-{{$surface->id}}--2">{{$surface->name}}</label>
            <span class="checkbox-outline"></span>
        </div>
        @endforeach
        <button class="bttn primary hidden-xs full-width btn-filter-confirm btn btn-default form-submit ajax-processed" id="edit-color-surface-usage-confirm--2" name="color_surface_usage_button" value="Xác nhận" type="button" tabindex="66">Xác nhận</button>
        </div>
        <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="67">Show more [+]</a>
        <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="68">Show less [-]</a>
    </div>
    </div>
    <div id="form-color-finish" class="form-color-finish form-collapse collapse-area">
    <div class="collapse-trigger accordeon-collapse-trigger-processed">
        Bề mặt hoàn thiện<span class="count-label input-counter counter-finish-surfaces">1</span>
        <svg class="icon icon-collapse-arrow right">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
        </svg>
    </div>
    <div class="collapse-content amountCount filter-finish-surfaces hidden">
        <div class="form-type-radios form-item-color-finish form-item form-group append-outline-processed">
        <div id="edit-color-finish--2" class="form-radios color-finish">
            <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
            <input data-label="Tất cả các" type="radio" id="edit-color-finish-all--2"
            name="color_finish" value="0" class="form-radio form-color-finish-item ajax-processed CLPFinishChange-processed" tabindex="69">  <label class="option" for="edit-color-finish-all--2">Tất cả các </label>
            <span class="radio-outline"></span>
            </div>
            @foreach($finishSurfaces as $finishSurface)
            <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
            <input data-label="{{$finishSurface->name}}"
                type="radio" id="edit-color-finish-{{$finishSurface->id}}--2"
                name="color_finish" value="{{$finishSurface->id}}"
                class="form-radio form-color-finish-item ajax-processed CLPFinishChange-processed" tabindex="70">
                <label class="option" for="edit-color-finish-{{$finishSurface->id}}--2">{{$finishSurface->name}}</label>
            <span class="radio-outline"></span>
            </div>
            @endforeach
        </div>
        </div>
        <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="73">Show more [+]</a>
        <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="74">Show less [-]</a>
    </div>
    </div>
  </div>
</div>
