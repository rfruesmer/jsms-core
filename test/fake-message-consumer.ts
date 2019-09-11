import { JsmsMessage } from "@/jsms-message";
import { JsmsMessageConsumer } from "@/jsms-message-consumer";
import { JsmsDeferred } from "@/jsms-deferred";
import { JsmsConnection } from "@/jsms-connection";
import { JsmsDestination } from "@/jsms-destination";
import { JsmsMessageListener } from "@/jsms-message-listener";


export class FakeMessageConsumer implements JsmsMessageConsumer, JsmsMessageListener {
    private connection: JsmsConnection;
    private destination: any;
    private deferred!: JsmsDeferred<JsmsMessage, object, Error>;
    
    constructor(connection: JsmsConnection, destination: JsmsDestination) {
        this.connection = connection;
        this.destination = destination;
    }

    public receive(): JsmsDeferred<JsmsMessage, object, Error> {
        this.deferred = new JsmsDeferred<JsmsMessage, object, Error>();
        
        return this.deferred;
    }

    public onMessage(message: JsmsMessage): void {
        throw new Error("Method not implemented.");
    }
}