import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const betcoin_json_interface = {};
const betcoin_address = "";

const SurveyLookup: React.FC  = () => {

    const [pollId, setPollId] = useState<string>("");
    // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    // var Contract = require('web3-eth-contract');
    // var contract = new Contract(betcoin_json_interface, betcoin_address)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ): void => {
        setPollId(event.target.value);
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(pollId);
        setPollId("");
        // contract.methods.getPollInfo().send({id: pollId});
    }

    return (
        <div className="p-1">
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ pollId } onChange={ handleInputChange }/>
                <input type="submit" value="Fetch Survey"/>
            </form>
        </div>
    )
}

export default SurveyLookup;