import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * @description These functions help to avoid the need to type the state and dispatch for the Redux store
 * @returns {TypedUseSelectorHook<RootState>} and {AppDispatch} types
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
