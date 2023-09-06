import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

//Todo esto permite tener un menor acoplamiento entre el componente y el store de redux
//En caso de querer cambiar redux por otra librería, solo se tendría que cambiar este archivo
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();