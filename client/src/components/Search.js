import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function Search({ getOption, options, componentId, label, renderOption, getOptionLabel, getOptionSelected,loading,value }) {
    return (
        <Autocomplete
            id={componentId}
            style={{ width: 250 }}
            options={options}
            loading={loading}
            value={value}
            autoHighlight
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            getOptionSelected={getOptionSelected}
            onChange={(event, newValue) => {
                getOption(newValue)
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
export default React.memo(Search)