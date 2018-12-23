<?php

Breadcrumbs::for('admin.dashboard', function ($trail) {
    $trail->push(__('strings.backend.dashboard.title'), route('admin.dashboard'));
});

Breadcrumbs::for('admin.color-groups.index', function ($trail) {
    $trail->push(__('strings.backend.colorgroups.index'), route('admin.color-groups.index'));
});

require __DIR__.'/auth.php';
require __DIR__.'/log-viewer.php';
