import { useTonConnectUI } from '@tonconnect/ui-react';
import { toNano } from '@ton/ton'

const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    messages: [
        {
            address: destination,
            amount: toNano("0.05").toString(),
            payload: body.toBoc().toString("base64") // payload with comment in body
        }
    ]
}

export const Settings = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    return (
        <div>
            <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
                Send transaction
            </button>
        </div>
    );
};
