export class Checkpoint {
  id: number;
  url: string;
  name: string;
  status: number;
  statusChangedon: string;
  checkResultcode: string;
  isMonitoringenabled: boolean;
  checkIntervalid: number;
  grepThis: string;
  grepPresence: boolean;
  notes: string;
  badgeToken: string;
  constructor(data = {id: null, url: '', name: '', status: null, statusChangedon: '', checkResultcode: '', isMonitoringenabled: null,
                      checkIntervalid: null, grepThis: '', grepPresence: null, notes: '', badgeToken: ''}) {
    this.id = data.id;
    this.url = data.url;
    this.name = data.name;
    this.status = data.status;
    this.statusChangedon = data.statusChangedon;
    this.checkResultcode = data.checkResultcode;
    this.isMonitoringenabled = data.isMonitoringenabled;
    this.checkIntervalid = data.checkIntervalid;
    this.grepThis = data.grepThis;
    this.grepPresence = data.grepPresence;
    this.notes = data.notes;
    this.badgeToken = data.badgeToken;
  }

}
