import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";

export type AutocompleteOption = {
  label: string;
  value: string;
};

interface AppAutocompleteProps
  extends MuiAutocompleteProps<AutocompleteOption, false, true, false> {}

export const AppAutocomplete = (props: AppAutocompleteProps): JSX.Element => {
  return <MuiAutocomplete {...props} disableClearable />;
};
