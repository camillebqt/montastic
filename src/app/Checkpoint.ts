export class Checkpoint {
  id: number;
  name: string;
  content: string;
  updated: string;
  queue: string;
  agent: number;
  priority: number;
  statut: number;
  watch: number;
  constructor(data = {id: null, name: '', content: '', updated: '', queue: '', agent: null, priority: null, statut: null, watch: null}) {
    this.id = data.id;
    this.name = data.name;
    this.content = data.content;
    this.updated = data.updated;
    this.queue = data.queue;
    this.agent = data.agent;
    this.priority = data.priority;
    this.statut = data.statut;
    this.watch = data.watch;
  }

}
