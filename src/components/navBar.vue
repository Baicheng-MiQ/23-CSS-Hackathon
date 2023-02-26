<template >
    <div class="sticky top-0">
        <div class="navbar bg-base-100 ring">
            <div class="">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Button1</a></li>
                        <li><a>Button2</a></li>
                        <li><a>Button3</a></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl text-red-600" href="/#">
                    <p>YumYumNow</p> <br />
                </a>
                <p v-show="$route.path.endsWith('/merchant')" class="text-xs text-gray-500">Business Page</p>
                <a class="btn btn-ghost normal-case" href="/user">
                    <p>Find Store</p>
                </a>
                <a class="btn btn-ghost normal-case" href="/#">
                    <p>About Us</p>
                </a>
            </div>
            <div class="navbar-end">
                <a class="btn btn-ghost normal-case" href="/#">
                    <p>Account ˅ </p>
                </a>
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style ></style>