import { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler, DeviceEventEmitter } from "react-native";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "@/store";

export const useBackHandler = (callback: () => boolean) => {
  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        callback
      );

      return () => backHandler && backHandler.remove();
    }, [callback])
  );
};

export const useEventEmitter = (eventName: string, callback: () => void) => {
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(eventName, callback);

    return () => subscription.remove();
  }, [eventName, callback]);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
