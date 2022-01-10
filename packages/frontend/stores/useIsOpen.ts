import create from 'zustand';

type IsOpenStore = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
};

export const useIsOpen = create<IsOpenStore>(set => ({
	isOpen: false,
	open: () => set(state => ({...state, isOpen: true})),
	close: () => set(state => ({...state, isOpen: false})),
	toggle: () => set(state => ({...state, isOpen: !state.isOpen})),
}));
