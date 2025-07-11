<?php $__env->startSection('content'); ?>

<!--Page header-->
<div class="page-header">
    <div class="page-leftheader">
        <h4 class="page-title"><?php echo e(session('title')); ?></h4>
    </div>
</div>
<!--End Page header-->


<div class="row">
    <div class="col-sm-12 col-md-6 col-xl-3">
        <div class="card bg-blue">
            <div class="card-body">
                <a href="<?php echo e(route('index.posts')); ?>"></a>
                <div class="d-flex no-block align-items-center">
                    <div>
                        <h6 class="text-white">Blogs</h6>
                        <h2 class="text-white m-0 font-weight-bold"><?php echo e($posts); ?></h2>
                    </div>
                    <div class="ml-auto">
                        <span class="text-white display-6"><i class="fa fa-file-text-o fa-2x"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-6 col-xl-3">
        <a href="<?php echo e(route('index.clients')); ?>"></a>
        <div class="card bg-teal">
            <div class="card-body">
                <div class="d-flex no-block align-items-center">
                    <div>
                        <h6 class="text-white">Registered Staff</h6>
                        <h2 class="text-white m-0 font-weight-bold"><?php echo e($clients); ?></h2>
                    </div>
                    <div class="ml-auto">
                        <span class="text-white display-6"><i class="fa fa-user-circle fa-2x"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-6 col-xl-3">
        <div class="card bg-blue">
            <div class="card-body">
                <div class="d-flex no-block align-items-center">
                    <div>
                        <h6 class="text-white">Events</h6>
                        <h2 class="text-white m-0 font-weight-bold"><?php echo e($events); ?></h2>
                    </div>
                    <div class="ml-auto">
                        <span class="text-white display-6"><i class="fa fa-server fa-2x"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-6 col-xl-3">
        <div class="card bg-teal">
            <div class="card-body">
                <div class="d-flex no-block align-items-center">
                    <div>
                        <h6 class="text-white">Partners</h6>
                        <h2 class="text-white m-0 font-weight-bold"><?php echo e($partners); ?></h2>
                    </div>
                    <div class="ml-auto">
                        <span class="text-white display-6"><i class="fa fa-users fa-2x"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Most Active Staff</h3>
                <div class="card-options ">
                </div>
            </div>
            <div class="card-body">
                <div class="">
                    <div class="table-responsive">
                        <div class="table-responsive">
                            <table class="table card-table table-vcenter text-nowrap mb-0 border">
                                <thead>
                                    <tr>
                                        <th class="wd-lg-10p">NAME</th>
                                        <th class="wd-lg-10p">Surname</th>
                                        <th class="wd-lg-10p">Posts Uploaded</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php $__currentLoopData = $active_clients; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($user->name); ?></td>
                                        <td><?php echo e($user->username); ?></td>
                                        <td>
                                            <?php echo e(number_format($user->posts->count())); ?> posts
                                        </td>
                                    </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\User\Desktop\Rahu Backend\BACKEND\reachahand-master\resources\views/dashboard.blade.php ENDPATH**/ ?>