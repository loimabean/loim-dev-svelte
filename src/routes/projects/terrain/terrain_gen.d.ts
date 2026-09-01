/* tslint:disable */
/* eslint-disable */

export function run_web(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run_web: () => void;
    readonly __wasm_bindgen_func_elem_12289: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_9573: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_4138: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_4: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_5: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_6: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_7: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_8: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_9: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9572_10: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_9574: (a: number, b: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export5: (a: number, b: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
