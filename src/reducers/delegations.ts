import {ActionPayload, Delegations} from 'actions/interfaces';
import {FETCH_DELEGATEES, FETCH_DELEGATORS} from 'actions/types';

const delegationsReducer = (
  state: Delegations = {incoming: [], outgoing: []},
  {type, payload}: ActionPayload<Delegations>,
) => {
  switch (type) {
    case FETCH_DELEGATEES:
      return {...state, outgoing: payload!.outgoing};
    case FETCH_DELEGATORS:
      return {...state, incoming: payload!.incoming};
    default:
      return state;
  }
};

export default delegationsReducer;
