import { TextField, ButtonGroup, Button } from '@mui/material'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="mx-auto border-t border-gray-400">
            <ButtonGroup>
                <TextField id="filled-basic" label="Job keywords, title" variant="standard" sx={{width:"300px" , pt:"3px"}}/>
                <TextField id="filled-basic" label="Location" variant="standard" sx={{width:"300px", pt:"3px", borderLeft:"1px solid gray"}} />
                <Button variant="contained" sx={{ padding: "0 30px" }}>Search</Button>
            </ButtonGroup>
        </div>
    )
}

export default SearchBar