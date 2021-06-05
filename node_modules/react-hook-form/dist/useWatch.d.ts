import { Control, DeepPartial, FieldPath, FieldPathValue, FieldPathValues, FieldValues, UnpackNestedValue } from './types';
export declare function useWatch<TFieldValues extends FieldValues = FieldValues>(props: {
    defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>;
    control?: Control<TFieldValues>;
}): UnpackNestedValue<DeepPartial<TFieldValues>>;
export declare function useWatch<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: {
    name: TName;
    defaultValue?: FieldPathValue<TFieldValues, TName>;
    control?: Control<TFieldValues>;
}): FieldPathValue<TFieldValues, TName>;
export declare function useWatch<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues>[] = FieldPath<TFieldValues>[]>(props: {
    name: TName;
    defaultValue?: UnpackNestedValue<DeepPartial<TFieldValues>>;
    control?: Control<TFieldValues>;
}): FieldPathValues<TFieldValues, TName>;
