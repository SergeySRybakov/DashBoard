import { createSlice } from '@reduxjs/toolkit';
const initialState = { layout: [] };

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        addWidgets: (state, action) => {
            const NUMBER_OF_COLUMNS = 6;
            if (action.payload !== 0) {
                const lastWidgetPosition = state.layout[state.layout.length - 1] ?? 1;
                state.layout = [
                    ...state.layout,
                    {
                        i: action.payload,
                        x: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
                            ? 0
                            : lastWidgetPosition.x + 2,
                        y: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
                            ? lastWidgetPosition.y + 2
                            : lastWidgetPosition.y + 2,
                        w: 2,
                        h: 2
                    },
                ];
            } else if (action.payload === 0) {
                state.layout = [{ x: 0, y: 0, i: 0, w: 2, h: 2 }]
            }
        },
        setLayout: (state, action) => {
            state.layout = action.payload
        },
        deleteWidget: (state, action) => {
            const i = action.payload;
            state.layout = state.layout.filter((widget) => widget.i !== i);
        }
    },
})

export const layoutReducer = layoutSlice.reducer;
export const { addWidgets, setLayout, deleteWidget } = layoutSlice.actions;