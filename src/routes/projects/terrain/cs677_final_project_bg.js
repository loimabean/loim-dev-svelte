export function run_web() {
    wasm.run_web();
}
export function __wbg_Window_c7f91e3f80ae0a0e(arg0) {
    const ret = getObject(arg0).Window;
    return addHeapObject(ret);
}
export function __wbg___wbindgen_debug_string_5398f5bb970e0daa(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_3c846841762788c1(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_undefined_52709e72fb9f179c(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
}
export function __wbg___wbindgen_throw_6ddd609b62940d55(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_6b5b6b8576d35cb1(arg0) {
    getObject(arg0)._wbg_cb_unref();
}
export function __wbg_abort_5ef96933660780b7(arg0) {
    getObject(arg0).abort();
}
export function __wbg_activeElement_c2981ba623ac16d9(arg0) {
    const ret = getObject(arg0).activeElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_addEventListener_2d985aa8a656f6dc() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments); }
export function __wbg_addListener_af610a227738fed8() { return handleError(function (arg0, arg1) {
    getObject(arg0).addListener(getObject(arg1));
}, arguments); }
export function __wbg_altKey_7f2c3a24bf5420ae(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
}
export function __wbg_altKey_a8e58d65866de029(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
}
export function __wbg_animate_8f41e2f47c7d04ab(arg0, arg1, arg2) {
    const ret = getObject(arg0).animate(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_appendChild_8cb157b6ec5612a6() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_blockSize_5871fe73cc8dcba0(arg0) {
    const ret = getObject(arg0).blockSize;
    return ret;
}
export function __wbg_body_5eb99e7257e5ae34(arg0) {
    const ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_brand_3bc196a43eceb8af(arg0, arg1) {
    const ret = getObject(arg1).brand;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_brands_b7dcf262485c3e7c(arg0) {
    const ret = getObject(arg0).brands;
    return addHeapObject(ret);
}
export function __wbg_button_bdc91677bd7bbf58(arg0) {
    const ret = getObject(arg0).button;
    return ret;
}
export function __wbg_buttons_a18e71d5dcec8ba9(arg0) {
    const ret = getObject(arg0).buttons;
    return ret;
}
export function __wbg_cancelAnimationFrame_43fad84647f46036() { return handleError(function (arg0, arg1) {
    getObject(arg0).cancelAnimationFrame(arg1);
}, arguments); }
export function __wbg_cancelIdleCallback_d3eb47e732dd4bcd(arg0, arg1) {
    getObject(arg0).cancelIdleCallback(arg1 >>> 0);
}
export function __wbg_cancel_65f38182e2eeac5c(arg0) {
    getObject(arg0).cancel();
}
export function __wbg_catch_d7ed0375ab6532a5(arg0, arg1) {
    const ret = getObject(arg0).catch(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_clearTimeout_fdfb5a1468af1a97(arg0, arg1) {
    getObject(arg0).clearTimeout(arg1);
}
export function __wbg_close_ab55423854e61546(arg0) {
    getObject(arg0).close();
}
export function __wbg_code_3c69123dcbcf263d(arg0, arg1) {
    const ret = getObject(arg1).code;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_contains_6b23671a193f58e5(arg0, arg1) {
    const ret = getObject(arg0).contains(getObject(arg1));
    return ret;
}
export function __wbg_contentRect_7047bba46353f683(arg0) {
    const ret = getObject(arg0).contentRect;
    return addHeapObject(ret);
}
export function __wbg_createElement_9b0aab265c549ded() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createObjectURL_f141426bcc1f70aa() { return handleError(function (arg0, arg1) {
    const ret = URL.createObjectURL(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_ctrlKey_6f8a95d15c098679(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
}
export function __wbg_ctrlKey_a41da599a72ee93d(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
}
export function __wbg_debug_4b9b1a2d5972be57(arg0) {
    console.debug(getObject(arg0));
}
export function __wbg_deltaMode_e239727f16c7ad68(arg0) {
    const ret = getObject(arg0).deltaMode;
    return ret;
}
export function __wbg_deltaX_74ad854454fab779(arg0) {
    const ret = getObject(arg0).deltaX;
    return ret;
}
export function __wbg_deltaY_c6ccae416e166d01(arg0) {
    const ret = getObject(arg0).deltaY;
    return ret;
}
export function __wbg_devicePixelContentBoxSize_82a5f309b4b96a31(arg0) {
    const ret = getObject(arg0).devicePixelContentBoxSize;
    return addHeapObject(ret);
}
export function __wbg_devicePixelRatio_c36a5fab28da634e(arg0) {
    const ret = getObject(arg0).devicePixelRatio;
    return ret;
}
export function __wbg_disconnect_09ddbc78942a2057(arg0) {
    getObject(arg0).disconnect();
}
export function __wbg_disconnect_21257e7fa524a113(arg0) {
    getObject(arg0).disconnect();
}
export function __wbg_document_c0320cd4183c6d9b(arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_error_8d9a8e04cd1d3588(arg0) {
    console.error(getObject(arg0));
}
export function __wbg_error_a6fa202b58aa1cd3(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_error_cfce0f619500de52(arg0, arg1) {
    console.error(getObject(arg0), getObject(arg1));
}
export function __wbg_focus_885197ce680db9e0() { return handleError(function (arg0) {
    getObject(arg0).focus();
}, arguments); }
export function __wbg_fullscreenElement_8068aa5be9c86543(arg0) {
    const ret = getObject(arg0).fullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getCoalescedEvents_08e25b227866a984(arg0) {
    const ret = getObject(arg0).getCoalescedEvents();
    return addHeapObject(ret);
}
export function __wbg_getCoalescedEvents_3e003f63d9ebbc05(arg0) {
    const ret = getObject(arg0).getCoalescedEvents;
    return addHeapObject(ret);
}
export function __wbg_getComputedStyle_b12e52450a4be72c() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getComputedStyle(getObject(arg1));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getElementById_d1f25d287b19a833(arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getOwnPropertyDescriptor_afeb931addada534(arg0, arg1) {
    const ret = Object.getOwnPropertyDescriptor(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_getPropertyValue_d2181532557839cf() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_get_a8ee5c45dabc1b3b(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
}
export function __wbg_get_unchecked_329cfe50afab7352(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
}
export function __wbg_height_8c06cb597de53887(arg0) {
    const ret = getObject(arg0).height;
    return ret;
}
export function __wbg_info_7d4e223bb1a7e671(arg0) {
    console.info(getObject(arg0));
}
export function __wbg_inlineSize_bc956acca480b3d7(arg0) {
    const ret = getObject(arg0).inlineSize;
    return ret;
}
export function __wbg_instanceof_Window_23e677d2c6843922(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_isIntersecting_b3e74fb0cf75f7d1(arg0) {
    const ret = getObject(arg0).isIntersecting;
    return ret;
}
export function __wbg_is_a166b9958c2438ad(arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));
    return ret;
}
export function __wbg_key_99eb0f0a1000963d(arg0, arg1) {
    const ret = getObject(arg1).key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_length_b3416cf66a5452c8(arg0) {
    const ret = getObject(arg0).length;
    return ret;
}
export function __wbg_location_cb6f3af6ad563d81(arg0) {
    const ret = getObject(arg0).location;
    return ret;
}
export function __wbg_log_524eedafa26daa59(arg0) {
    console.log(getObject(arg0));
}
export function __wbg_matchMedia_b27489ec503ba2a5() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_matches_d58caa45a0ef29a3(arg0) {
    const ret = getObject(arg0).matches;
    return ret;
}
export function __wbg_media_91e147d0112e864c(arg0, arg1) {
    const ret = getObject(arg1).media;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_metaKey_04074c2a59c1806c(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
}
export function __wbg_metaKey_09c90f191df1276b(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
}
export function __wbg_movementX_36b3256d18bcf681(arg0) {
    const ret = getObject(arg0).movementX;
    return ret;
}
export function __wbg_movementY_004a98ec08b8f584(arg0) {
    const ret = getObject(arg0).movementY;
    return ret;
}
export function __wbg_navigator_9cebf56f28aa719b(arg0) {
    const ret = getObject(arg0).navigator;
    return addHeapObject(ret);
}
export function __wbg_new_227d7c05414eb861() {
    const ret = new Error();
    return addHeapObject(ret);
}
export function __wbg_new_3acd383af1655b5f() { return handleError(function (arg0, arg1) {
    const ret = new Worker(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_42398a42abc5b110() { return handleError(function (arg0) {
    const ret = new IntersectionObserver(getObject(arg0));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_ab79df5bd7c26067() {
    const ret = new Object();
    return addHeapObject(ret);
}
export function __wbg_new_c518c60af666645b() { return handleError(function () {
    const ret = new AbortController();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_de704db0001dadc8() { return handleError(function (arg0) {
    const ret = new ResizeObserver(getObject(arg0));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_f7708ba82c4c12f6() { return handleError(function () {
    const ret = new MessageChannel();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_with_str_sequence_and_options_a037535f6e1edba0() { return handleError(function (arg0, arg1) {
    const ret = new Blob(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_now_e7c6795a7f81e10f(arg0) {
    const ret = getObject(arg0).now();
    return ret;
}
export function __wbg_observe_571954223f11dad1(arg0, arg1, arg2) {
    getObject(arg0).observe(getObject(arg1), getObject(arg2));
}
export function __wbg_observe_a829ffd9907f84b1(arg0, arg1) {
    getObject(arg0).observe(getObject(arg1));
}
export function __wbg_observe_e1a1f270d8431b29(arg0, arg1) {
    getObject(arg0).observe(getObject(arg1));
}
export function __wbg_of_8bf7ed3eca00ea43(arg0) {
    const ret = Array.of(getObject(arg0));
    return addHeapObject(ret);
}
export function __wbg_of_d6376e3774c51f89(arg0, arg1) {
    const ret = Array.of(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_offsetX_a9bf2ea7f0575ac9(arg0) {
    const ret = getObject(arg0).offsetX;
    return ret;
}
export function __wbg_offsetY_10e5433a1bbd4c01(arg0) {
    const ret = getObject(arg0).offsetY;
    return ret;
}
export function __wbg_performance_3fcf6e32a7e1ed0a(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
}
export function __wbg_persisted_8366757621586c61(arg0) {
    const ret = getObject(arg0).persisted;
    return ret;
}
export function __wbg_play_3997a1be51d27925(arg0) {
    getObject(arg0).play();
}
export function __wbg_pointerId_85ff21be7b52f43e(arg0) {
    const ret = getObject(arg0).pointerId;
    return ret;
}
export function __wbg_pointerType_02525bef1df5f79c(arg0, arg1) {
    const ret = getObject(arg1).pointerType;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_port1_869a7ef90538dbdf(arg0) {
    const ret = getObject(arg0).port1;
    return addHeapObject(ret);
}
export function __wbg_port2_947a51b8ba00adc9(arg0) {
    const ret = getObject(arg0).port2;
    return addHeapObject(ret);
}
export function __wbg_postMessage_5ed5275983f7dad2() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).postMessage(getObject(arg1), getObject(arg2));
}, arguments); }
export function __wbg_postMessage_c89a8b5edbf59ad0() { return handleError(function (arg0, arg1) {
    getObject(arg0).postMessage(getObject(arg1));
}, arguments); }
export function __wbg_postTask_e2439afddcdfbb55(arg0, arg1, arg2) {
    const ret = getObject(arg0).postTask(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_pressure_8a4698697b9bba06(arg0) {
    const ret = getObject(arg0).pressure;
    return ret;
}
export function __wbg_preventDefault_25a229bfe5c510f8(arg0) {
    getObject(arg0).preventDefault();
}
export function __wbg_prototype_0d5bb2023db3bcfc() {
    const ret = ResizeObserverEntry.prototype;
    return addHeapObject(ret);
}
export function __wbg_queueMicrotask_0c399741342fb10f(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
}
export function __wbg_queueMicrotask_9608487e970c906d(arg0, arg1) {
    getObject(arg0).queueMicrotask(getObject(arg1));
}
export function __wbg_queueMicrotask_a082d78ce798393e(arg0) {
    queueMicrotask(getObject(arg0));
}
export function __wbg_removeEventListener_d27694700fc0df8b() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments); }
export function __wbg_removeListener_7afb5d85c58c554b() { return handleError(function (arg0, arg1) {
    getObject(arg0).removeListener(getObject(arg1));
}, arguments); }
export function __wbg_removeProperty_5b3523637b608633() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).removeProperty(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_repeat_44d6eeebd275606f(arg0) {
    const ret = getObject(arg0).repeat;
    return ret;
}
export function __wbg_requestAnimationFrame_206c97f410e7a383() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_requestFullscreen_3f16e43f398ce624(arg0) {
    const ret = getObject(arg0).requestFullscreen();
    return addHeapObject(ret);
}
export function __wbg_requestFullscreen_b977a3a0697e883c(arg0) {
    const ret = getObject(arg0).requestFullscreen;
    return addHeapObject(ret);
}
export function __wbg_requestIdleCallback_3689e3e38f6cfc02(arg0) {
    const ret = getObject(arg0).requestIdleCallback;
    return addHeapObject(ret);
}
export function __wbg_requestIdleCallback_75108097af8f5c6a() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestIdleCallback(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_resolve_ae8d83246e5bcc12(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
}
export function __wbg_revokeObjectURL_c4a7ed8e1908b794() { return handleError(function (arg0, arg1) {
    URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_scheduler_a17d41c9c822fc26(arg0) {
    const ret = getObject(arg0).scheduler;
    return addHeapObject(ret);
}
export function __wbg_scheduler_b35fe73ba70e89cc(arg0) {
    const ret = getObject(arg0).scheduler;
    return addHeapObject(ret);
}
export function __wbg_setAttribute_f20d3b966749ab64() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setPointerCapture_b6e6a21fc0db7621() { return handleError(function (arg0, arg1) {
    getObject(arg0).setPointerCapture(arg1);
}, arguments); }
export function __wbg_setProperty_ef29d2aa64a04d2b() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setTimeout_647865935a499f8b() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).setTimeout(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_setTimeout_7f7035ad0b026458() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
}, arguments); }
export function __wbg_set_7eaa4f96924fd6b3() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
}, arguments); }
export function __wbg_set_box_6a730e6c216d512c(arg0, arg1) {
    getObject(arg0).box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
}
export function __wbg_set_onmessage_f939f8b6d08ca76b(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
}
export function __wbg_set_type_33e79f1b45a78c37(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
}
export function __wbg_shiftKey_5256a2168f9dc186(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
}
export function __wbg_shiftKey_ec106aa0755af421(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
}
export function __wbg_signal_166e1da31adcac18(arg0) {
    const ret = getObject(arg0).signal;
    return addHeapObject(ret);
}
export function __wbg_stack_3b0d974bbf31e44f(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_start_f837ba2bac4733b5(arg0) {
    getObject(arg0).start();
}
export function __wbg_static_accessor_GLOBAL_8adb955bd33fac2f() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_SELF_f207c857566db248() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_WINDOW_bb9f1ba69d61b386() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_style_b01fc765f98b99ff(arg0) {
    const ret = getObject(arg0).style;
    return addHeapObject(ret);
}
export function __wbg_then_098abe61755d12f6(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_unobserve_397ea595cb8bfdd0(arg0, arg1) {
    getObject(arg0).unobserve(getObject(arg1));
}
export function __wbg_userAgentData_31b8f893e8977e94(arg0) {
    const ret = getObject(arg0).userAgentData;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_userAgent_161a5f2d2a8dee61() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg1).userAgent;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_visibilityState_8b47c97faee36457(arg0) {
    const ret = getObject(arg0).visibilityState;
    return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
}
export function __wbg_warn_69424c2d92a2fa73(arg0) {
    console.warn(getObject(arg0));
}
export function __wbg_webkitFullscreenElement_4055d847f8ff064e(arg0) {
    const ret = getObject(arg0).webkitFullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_webkitRequestFullscreen_c4ec4df7be373ffd(arg0) {
    getObject(arg0).webkitRequestFullscreen();
}
export function __wbg_width_9824c1a2c17d3ebd(arg0) {
    const ret = getObject(arg0).width;
    return ret;
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [Externref], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 309, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1322);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000003(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_2);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("Event")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_3);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_4);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_5);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000007(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_6);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000008(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_7);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000009(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 311, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1321_8);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000a(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 308, function: Function { arguments: [], shim_idx: 315, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_1029, __wasm_bindgen_func_elem_1320);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000b(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 384, function: Function { arguments: [Externref], shim_idx: 385, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2713, __wasm_bindgen_func_elem_2698);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000c(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000d(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
}
export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
}
function __wasm_bindgen_func_elem_1320(arg0, arg1) {
    wasm.__wasm_bindgen_func_elem_1320(arg0, arg1);
}

function __wasm_bindgen_func_elem_1321(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_2(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_2(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_3(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_3(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_4(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_4(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_5(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_5(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_6(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_6(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_7(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_7(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1321_8(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_1321_8(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_1322(arg0, arg1, arg2, arg3) {
    wasm.__wasm_bindgen_func_elem_1322(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

function __wasm_bindgen_func_elem_2698(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_2698(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function dropObject(idx) {
    if (idx < 1028) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export3(addHeapObject(e));
    }
}

let heap = new Array(1024).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
