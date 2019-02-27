<?php

Breadcrumbs::for('admin.dashboard', function ($trail) {
    $trail->push(__('strings.backend.dashboard.title'), route('admin.dashboard'));
});

Breadcrumbs::for('admin.color-groups.index', function ($trail) {
    $trail->push(__('strings.backend.colorgroups.index'), route('admin.color-groups.index'));
});
Breadcrumbs::for('admin.color-groups.create', function ($trail) {
    $trail->push(__('strings.backend.colorgroups.create'), route('admin.color-groups.create'));
});

Breadcrumbs::for('admin.products.index', function ($trail) {
    $trail->push(__('strings.backend.products.index'), route('admin.products.index'));
});
Breadcrumbs::for('admin.products.create', function ($trail) {
    $trail->push(__('strings.backend.products.create'), route('admin.products.create'));
});
Breadcrumbs::for('admin.products.edit', function ($trail, $id) {
    $trail->push(__('strings.backend.products.edit'), route('admin.products.edit', $id));
});
Breadcrumbs::for('admin.products.update', function ($trail, $id) {
    $trail->push(__('strings.backend.products.update'), route('admin.products.update', $id));
});

Breadcrumbs::for('admin.posts.index', function ($trail) {
    $trail->push(__('strings.backend.posts.index'), route('admin.posts.index'));
});
Breadcrumbs::for('admin.posts.create', function ($trail) {
    $trail->push(__('strings.backend.posts.create'), route('admin.posts.create'));
});
Breadcrumbs::for('admin.posts.edit', function ($trail, $id) {
    $trail->push(__('strings.backend.posts.edit'), route('admin.posts.edit', $id));
});
Breadcrumbs::for('admin.posts.update', function ($trail, $id) {
    $trail->push(__('strings.backend.posts.update'), route('admin.posts.update', $id));
});

require __DIR__.'/auth.php';
require __DIR__.'/log-viewer.php';
