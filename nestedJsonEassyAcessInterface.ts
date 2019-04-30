//after making json make interface for nested json
export interface ITreeData{
    tree_data:INodeTree[];
}
 interface INodeTree {
    organization_id:number;//sinfosy
    organization_name:string;
    sub_org:ISuborg[];
    isActive:number;
    file:  string;
    measures: string;
    system_view: string;
    urgent_information: string;
}
interface ISuborg{
    sub_organization_id: number;
    sub_organization_name: string;//factory1
    sub_group:Inodes[];
    file:string;
    measures:string;
    system_view: string;
    urgent_information:string;
}

interface Inodes{
 node_id: number;
 node_name: string;//halle1
 isActive:number,
 file:string;
 measures:string;
 system_view: string;
 urgent_information:string;
 sub_node:ISubnode[]
}
interface ISubnode{
    sub_node_id: number;
    sub_node_name:string;//machine1
    isActive:number;
    file: string;
    measures:string;
    system_view:string;
    urgent_information:string; 
}





 // sub_group:[
    //     {
    //         sub_organization_id: number;
    //         sub_organization_name: string;
    //         sub_group:Inodes[];
    //         file:string;
    //         measures:string;
    //         system_view: string;
    //         urgent_information:string;
    //     }
    // ];
