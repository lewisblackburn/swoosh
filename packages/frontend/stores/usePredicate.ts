import create from 'zustand';

type PredicateStore = {
	predicate: string;
	setPredicate: (predicate: string) => void;
};

export const usePredicate = create<PredicateStore>(set => ({
	predicate: '',
	setPredicate: predicate => set({predicate}),
}));
